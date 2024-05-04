import {
  HomeRounded,
  LibraryBooksRounded,
  KeyboardDoubleArrowLeftRounded,
  ContentCutRounded,
  FactCheckRounded,
  GroupsRounded,
  StarRounded
} from "@mui/icons-material";
import SideBarElement from "../components/SideBarElement";
import { useState } from "react";

export default function SideBar() {

  const [active, setActive] = useState(false)

  return (
    <>
      <aside className={`max-w-96 w-full flex flex-col items-center h-screen gap-1 pt-2`}>
        <span className="py-1 w-10/12 flex justify-end">
          <KeyboardDoubleArrowLeftRounded
            fontSize="large"
            className="cursor-pointer"
          />
        </span>
        <SideBarElement href="/home">
          <HomeRounded />
          <span>Inicio</span>
        </SideBarElement>
        <SideBarElement href="/assignments">
          <LibraryBooksRounded />
          <span>Materias</span>
        </SideBarElement>
        <SideBarElement href="/exams">
          <ContentCutRounded />
          <span>Exámenes</span>
        </SideBarElement>
        <SideBarElement href="/homeworks">
          <FactCheckRounded />
          <span>Tareas</span>
        </SideBarElement>
        <SideBarElement href="/community">
          <GroupsRounded />
          <span>Comunidad</span>
        </SideBarElement>
        <SideBarElement href="/grades">
          <StarRounded />
          <span>Calificaciones</span>
        </SideBarElement>
      </aside>
    </>
  );
}
