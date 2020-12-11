import React from "react"
import { createUseStyles } from "react-jss"

import style from "../css/pages/homeStyle"
import SubjectListElement from "../components/SubjectListElement"

const useStyles = createUseStyles(style)

export default function Home() {
   const classes = useStyles()

   const subjects = [
      { name: "Programowanie Komponentowe" },
      { name: "Podstawy Zarządzania Projektami" },
      { name: "Komputerowa Analiza Danych" },
      { name: "Podstawy Kryptografii" },
      { name: "Podstawy Sieci Komputerowych" },
      { name: "Technologie XML" },
      { name: "Gówno" },
   ]

   const subjectList = subjects.map((item) => (
      <SubjectListElement name={item.name} key={item.name} />
   ))

   return (
      <div className={classes.home}>
         <div className="subjects">
            <h3>Lista przedmiotów</h3>
            {subjectList}
         </div>
         <div className="notes">
            <h3>Notatki</h3>
         </div>
      </div>
   )
}
