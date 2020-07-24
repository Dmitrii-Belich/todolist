import React from 'react';

import Folder from "../Folder"
import "./SideBar.scss";
import Popup from "../Popup"


export default function Sidebar({folders, activeFolder, onFolderClick, onAddFolderClick, popupSubmitHandler, isPopupActive, colors, onPopupClose, onDeleteFolderClick}) {
    
    return (
        
        <div className="sidebar">
       {  folders.length !==0 &&   <Folder type="all" text="Все задачи" id={0} activeFolder={activeFolder} onClick={onFolderClick}/>}
            <ul className="sidebar__folders">
            {
                folders.map((item) => {
                    return <li key={item.id}><Folder  type="folder"  text={item.name} color={item.color} id={item.id} activeFolder={activeFolder} onClick={onFolderClick} onDeleteFolderClick={onDeleteFolderClick}/></li>
                })
            }
            </ul>
            <Folder type="add"  text="Добавить папку" onClick={onAddFolderClick} id={Infinity} />
            <Popup isActive={isPopupActive} onSubmit={popupSubmitHandler} colors={colors} onPopupClose={onPopupClose}/>
        </div>
    )
}
