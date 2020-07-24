import React from 'react'
import "./Folder.scss"
import allFoldersSvg from "../../assets/allFolders.svg"
import addFolderSvg from "../../assets/addFolder.svg"

export default function Folder({type, text, onClick, activeFolder, color, id, onDeleteFolderClick}) {
    const style = type === "add"  ? {color: '#767676'}: {}
    return (
        <div className={`sidebar__folder ${ id === activeFolder && "sidebar__folder_type_active"}`} onClick={() => { onClick(id)} }>
            {
               type === "all" && (<img className="sidebar__icon" src={allFoldersSvg} alt="Иконка всех задач"  />)
            }
            {
                type === "add" && (<img className="sidebar__icon" src={addFolderSvg} alt="Иконка добавления задач"  />)
            }
            {
                type === "folder" &&(<i className="sidebar__icon sidebar__icon_type_folder"  style={
                    {backgroundColor: color}
                } ></i>)
            }
            <h2 className="sidebar__folder-name" style={style}>{text}</h2>
            {
                type === "folder" &&(<button className="sidebar__delete" onClick={(evt) => {
                    evt.stopPropagation()
                    onDeleteFolderClick(id)
                }}></button>)
            }
            
        </div>
    )
}
