import React, {
   FunctionComponent,
   useState,
   useRef,
   createRef,
   useEffect,
   useCallback,
   forwardRef,
} from 'react'
import {
   FormGroup,
   Input,
   Highlight,
   Help,
   Error,
   OptionsContent,
   Arrow
} from './styles'

import { Option } from '../Option'

export type Select = {
   /**
    * The label element represents a label which can be associated to a form control, and is supposed to provide a short description for it.
    */
   label: string
   value: any
}

interface SelectBoxProps {
   /**
    * The label element represents a label which can be associated to a form control, and is supposed to provide a short description for it.
    */
   label: string
   error?: string
   help?: string
   options: Array<Select>
   value?: Select
   required?: boolean
   name?: string
   disabled?: boolean
   clearable?: boolean
   /**
    * The onchange event occurs when the value of an React component has been changed.
    */
   onChange: (e: Select) => void
   id?: string
   /**
   * Test property, sometimes you can't reliably select an element by any of the other queries. For those, it's recommended to use data-testid
   */
   ['data-testid']?: string
   /**
    * When your option list is empty you can set a short description for it.
    */
   labelNoOptions?: string
   /**
    * The onblur event occurs when an React component loses focus.
    */
   onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
   /**
    * Refs provide a way to access DOM nodes or React elements.
    */
   ref?: React.Ref<HTMLFieldSetElement>
}

const initialState = {
   label: '',
   value: '',
}

const SelectBox: FunctionComponent<SelectBoxProps> = forwardRef(({
   label,
   error,
   help,
   required,
   options,
   value = initialState,
   onChange,
   id,
   clearable,
   labelNoOptions,
   onBlur,
   ...rest
}, ref: React.Ref<HTMLFieldSetElement>) => {
   const [open, setOpen] = useState(false)
   const [selectOptions, setSelectOptions] = useState<Array<Select>>(options)
   const [inputValue, setInputValue] = useState<Select>(value)
   const [touched, setTouched] = useState(false)
   const [keyUpAndDownPosition, setKeyUpAndKeyDownPosition] = useState(
      value.value ? selectOptions.indexOf(value) : 0,
   )

   const optionsContent = useRef<HTMLDivElement>(null)
   const input = useRef<HTMLInputElement>(null)

   const createRefOptions = (options: Array<Select>) =>
      options.reduce((acc: any, ref) => {
         return Object.assign(acc, {
            [ref.value]: createRef()
         })
      }, {})

   const [refList, setRefList] = useState(createRefOptions(options))

   const handleKeyUpAndKeyDown = (e: any) => {
      if (e.keyCode === 38 && selectOptions[keyUpAndDownPosition - 1]) {
         setInputValue(selectOptions[keyUpAndDownPosition - 1])
         setKeyUpAndKeyDownPosition(keyUpAndDownPosition - 1)
      } else if (e.keyCode === 40 && selectOptions[keyUpAndDownPosition + 1]) {
         setInputValue(selectOptions[keyUpAndDownPosition + 1])
         setKeyUpAndKeyDownPosition(keyUpAndDownPosition + 1)
      } else if (
         e.keyCode === 38 ||
         (e.keyCode === 40 && selectOptions.length)
      ) {
         if (selectOptions.length === keyUpAndDownPosition + 1) {
            return
         }
         setKeyUpAndKeyDownPosition(0)
         setInputValue(selectOptions[0])
      }

      refList?.[inputValue.value]?.current.scrollIntoView({
         behavior: 'auto',
         block: 'center',
      })
   }

   const handleClickOutside = useCallback((e: any) => {
      if (
         optionsContent.current &&
         input.current &&
         !optionsContent.current.contains(e.target) &&
         !input.current.contains(e.target)
      ) {
         setInputValue(value)
         setOpen(false)
      }
   }, [value])

   const handleEnter = (e: any) => {
      if (e.keyCode === 13 || e.keyCode === 9) {
         if (!selectOptions.includes(inputValue)) {
            setInputValue(value)
            setOpen(false)
            input.current?.blur()
         } else {
            onChange(inputValue)
            setOpen(false)
            input.current?.blur()
         }
      }
   }

   const filterOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newOptions = options.filter(option => {
         return (
            option.label
               .toLowerCase()
               .search(e.target.value.toLowerCase().trim()) > -1
         )
      })

      setInputValue({
         label: e.target.value,
         value: '',
      })

      setSelectOptions(newOptions)
      setRefList(createRefOptions(selectOptions))
   }

   const handleSelectClick = (option: Select) => {
      if ([null, ''].indexOf(option.value) >= 0) {
         return
      }
      setInputValue(option)
      onChange(option)
      setOpen(false)
      setKeyUpAndKeyDownPosition(selectOptions.indexOf(option))
   }

   const handleInputFocus = () => {
      setOpen(true)
   }

   useEffect(() => {
      if ([null, ''].indexOf(value.value) >= 0)
         setInputValue(initialState)
      else
         setInputValue(value)

   }, [value])

   useEffect(() => {
      setSelectOptions(options)
      setRefList(createRefOptions(options))
   }, [open, options])

   useEffect(() => {


      if (open) {
         document.addEventListener('mousedown', handleClickOutside)
      } else {
         document.removeEventListener('mousedown', handleClickOutside)
      }

      return () => {
         document.removeEventListener('mousedown', handleClickOutside)
      }
   }, [handleClickOutside, open])

   return (
      <FormGroup onKeyDown={handleEnter} ref={ref}>
         <Input
            {...rest}
            type="text"
            option={inputValue}
            value={inputValue.label}
            autoComplete="off"
            onChange={filterOptions}
            onFocus={handleInputFocus}
            onKeyDown={handleKeyUpAndKeyDown}
            ref={input}
            title={inputValue.label}
            onBlur={e => {
               setTouched(true)
               onBlur?.(e)
            }}
         />
         <label>
            {label}
            {required && <span> *</span>}
         </label>
         <Highlight className={(error && touched) ? 'has-error' : ''} />
         {help && <Help>{help}</Help>}
         {(error && touched) && <Error className="error-label">{error}</Error>}

         <Arrow />

         <OptionsContent open={open} ref={optionsContent} width={input.current?.offsetWidth || 400}>
            <div id={id}>
               {selectOptions.length > 0 ? (
                  selectOptions.map((option, index) => (
                     <Option
                        ref={refList[option.value]}
                        key={`option-${index}`}
                        active={option.value === value.value}
                        hover={option.value === inputValue.value}
                        onClick={() => handleSelectClick(option)}
                        title={option.label}
                     >
                        {option.label}
                     </Option>
                  ))
               ) : (
                     <Option>{labelNoOptions || 'No option available'}</Option>
                  )}
            </div>
         </OptionsContent>
      </FormGroup>
   )
})

export { SelectBox }
