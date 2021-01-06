import React, { useState, useEffect } from "react"
import { createUseStyles } from "react-jss"
import { useSelector, useDispatch } from "react-redux"
import style from "../../css/componentsStyle/eventsStyle/AddEventStyle"
import TextInput from "../util/TextInput"
import Button from "../util/Button"
import { getSubjects } from "../../redux/actions/dataActions"
import { addEvent } from "../../redux/actions/dataActions"

const useStyles = createUseStyles(style)

export default function AddEvent(props) {
   const classes = useStyles()
   const dispatch = useDispatch()

   const { toggleModal } = props
   const subjects = useSelector((state) => state.data.subjects)

   const [description, setDescription] = useState("")
   const [deadline, setDeadline] = useState(new Date())
   const [subjectHandle, setSubjectHandle] = useState("pel")
   const [error, setError] = useState("")

   const handleSubmit = (e) => {
      e.preventDefault()
      if (!error) console.log("wysłano")
      const newEvent = {
         description,
         deadline,
         subjectHandle,
      }
      dispatch(addEvent(newEvent))
      toggleModal()
   }

   let nextWeek = new Date()
   console.log(nextWeek)

   console.log(nextWeek.getTime() + 7 * 1000 * 60 * 60 * 24 * 7)
   console.log(new Date(nextWeek.getTime() + 1000 * 60 * 60 * 24 * 7))

   return (
      <div className={classes.addEvent}>
         <button onClick={toggleModal} className="bg"></button>
         <div className="modalBody">
            <h3>Dodaj zadanie</h3>
            <form noValidate onSubmit={handleSubmit}>
               <select
                  defaultValue={subjectHandle}
                  onBlur={(e) => {
                     setSubjectHandle(e.target.value)
                  }}
               >
                  {subjects.map((item) => (
                     <option value={item.subjectId} key={item.subjectId}>
                        {item.name}
                     </option>
                  ))}
               </select>
               <input
                  type="date"
                  name="deadline"
                  id="deadline"
                  defaultValue={deadline}
                  onChange={(e) => {
                     setDeadline(new Date(e.target.value))
                  }}
               />
               <TextInput
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  type="text"
                  name="description"
                  id="description"
                  autoComplete="off"
                  label="Description"
               />
               <Button>Dodaj zadanie</Button>
            </form>
         </div>
      </div>
   )
}
