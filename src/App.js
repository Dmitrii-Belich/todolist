import React from "react";
import Sidebar from "./components/SideBar";
import TaskBar from "./components/TaskBar";
import DataBaseInitial from "./assets/db.json";

export default function App() {
  const [activeFolder, setActiveFolder] = React.useState(0);
  const [sideBarState, setSideBarState] = React.useState(false)
  const [folders, setFolders] = React.useState(
    localStorage.getItem("folders") && !localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("folders"))
      : () => {
          localStorage.clear();
          localStorage.setItem(
            "folders",
            JSON.stringify(DataBaseInitial.lists)
          );
          return JSON.parse(localStorage.getItem("folders"));
        }
  );
  const [colors] = React.useState(
    localStorage.getItem("colors")
      ? JSON.parse(localStorage.getItem("colors"))
      : () => {
          localStorage.setItem(
            "colors",
            JSON.stringify(DataBaseInitial.colors)
          );
          return JSON.parse(localStorage.getItem("colors"));
        }
  );
  const [isPopupActive, setPopupActive] = React.useState(false);

  const refreshStorage = (key, data) => {
    localStorage[key] = JSON.stringify(data);
  };

  const popupSubmitHandler = (name, colorId) => {
    const newFolders = deepCopy(folders);
    newFolders.push({
      name: name,
      colorId: colorId,
      id: folders.length ? folders.length + 1 : 1,
      tasks: []
    });
    reIndex(newFolders);
    onPopupClose();
  };

  const onPopupClose = () => {
    setPopupActive(false);
  };

  const onFolderClick = (id) => {
    setActiveFolder(id);
  };
  const onAddFolderClick = () => {
    setPopupActive(true);
  };
  const onDeleteFolderClick = (id) => {
    setActiveFolder(0);
    const newFolders = deepCopy(folders);
    const itemId = newFolders.findIndex((item) => item.id === id);
    newFolders.splice(itemId, 1);
    reIndex(newFolders);
  };
  const onTaskClick = (folderId, taskId) => {
    const newFolders = deepCopy(folders);
    const currentFolder = newFolders.find((item) => item.id === folderId);
    const currentTask = currentFolder.tasks.find((item) => item.id === taskId);
    currentTask.completed = !currentTask.completed;
    reIndex(newFolders);
  };
  const onTaskChange = (folderId, taskId, value) => {
    const newFolders = deepCopy(folders);
    const currentFolder = newFolders.find((item) => item.id === folderId);
    const currentTask = currentFolder.tasks.find((item) => item.id === taskId);
    currentTask.text = value;
    reIndex(newFolders);
  };
  const onAddTaskButton = (FolderId) => {
    const newFolders = deepCopy(folders);
    const currentFolder = newFolders.find((item) => item.id === FolderId);
    currentFolder.tasks.push({
      listId: FolderId,
      text: "",
      completed: false,
      id: findFreeId(FolderId, currentFolder.tasks),
    });
    reIndex(newFolders);
  };
  const onTaskDelete = (folderId, taskId) => {
    const newFolders = deepCopy(folders);
    const currentFolder = newFolders.find((item) => item.id === folderId);
    const currentTask = currentFolder.tasks.findIndex(
      (item) => item.id === taskId
    );
    currentFolder.tasks.splice(currentTask, 1);
    reIndex(newFolders);
  };
  folders.map((item) => {
    item.color = colors.find((color) => color.id === item.colorId).hex;
    return item;
  });
  const reIndex = (folders) => {
    setFolders(folders);
    refreshStorage("folders", folders);
  };
  const onFolderChange = (id, value) => {
    const newFolders = deepCopy(folders);
    newFolders.find((item) => item.id === id).name = value;
    reIndex(newFolders);
  };
  const onFolderColorChange = (id, value) => {
    const newFolders = deepCopy(folders);
    newFolders.find((item) => item.id === id).colorId = value;

    reIndex(newFolders);
  };

  const onDropInSameFolder = (nextindex, folderId, taskId) => {
    const newFolders = deepCopy(folders);
    const currentTasks = newFolders.find((item) => item.id === folderId).tasks;
    const currentTask = currentTasks.find((item) => item.id === taskId);
    currentTasks.splice(
      currentTasks.findIndex((item) => item.id === taskId),
      1
    );
    const remainingTasks = currentTasks.splice(nextindex);
    currentTasks.push(currentTask, ...remainingTasks);
    reIndex(newFolders);
  };
  const onDropInEnotherFolder = (
    nextindex,
    previousFolderId,
    nextFolderId,
    taskId
  ) => {
    console.log(nextindex, nextFolderId, previousFolderId, taskId);
    const newFolders = deepCopy(folders);
    const previousTasks = newFolders.find(
      (item) => item.id === previousFolderId
    ).tasks;
    const currentTask = previousTasks.find((item) => item.id === taskId);
    previousTasks.splice(
      previousTasks.findIndex((item) => item.id === taskId),
      1
    );
    const nextTasks = newFolders.find((item) => item.id === nextFolderId).tasks;
    currentTask.id = findFreeId(nextFolderId, nextTasks);
    const remainingTasks = nextTasks.splice(nextindex);
    nextTasks.push(currentTask, ...remainingTasks);
    reIndex(newFolders);
  };
  const dropFolder = (nextindex, folderId) => {
    const newFolders = deepCopy(folders);
    const currentFolder = newFolders.find((item) => item.id === folderId);
    newFolders.splice(
      newFolders.findIndex((item) => item.id === folderId),
      1
    );
    const remainingFolders = newFolders.splice(nextindex);
    newFolders.push(currentFolder, ...remainingFolders);
    reIndex(newFolders);
  };

  const findFreeId = (folderId, array) => {
    if (!array.length) {
      return +(folderId.toString() + 0);
    }
    let i = 0;
    let id = +(folderId.toString() + i);
    // eslint-disable-next-line
    while (array.some((item) => item.id === id)) {
      id = +(folderId.toString() + i);
      i++;
    }
    return id;
  };

  const deepCopy = (array) => {
    const newArray = [];
    array.forEach((item, index) => {
      newArray.push(Object.assign({}, item));
      newArray[index].tasks = [];
      array[index].tasks.forEach((item) => {
        newArray[index].tasks.push(Object.assign({}, item));
      });
    });
    return newArray;
  };

  return (
    <div className="todo">
      <button
        className={`todo__sidebarButton ${
          sideBarState && "todo__sidebarButton_type_close"
        }`}
        onClick={() => {
          setSideBarState(!sideBarState);
        }}
      ></button>
      <Sidebar
        folders={folders}
        activeFolder={activeFolder}
        onAddFolderClick={onAddFolderClick}
        onFolderClick={onFolderClick}
        isPopupActive={isPopupActive}
        popupSubmitHandler={popupSubmitHandler}
        colors={colors}
        onPopupClose={onPopupClose}
        onDeleteFolderClick={onDeleteFolderClick}
        onDrop={dropFolder}
        sideBarState={sideBarState}
        setSideBarState={setSideBarState}
      />
      <TaskBar
        onDropInSameFolder={onDropInSameFolder}
        onFolderChange={onFolderChange}
        onTaskDelete={onTaskDelete}
        onAddTaskButton={onAddTaskButton}
        onTaskChange={onTaskChange}
        onTaskClick={onTaskClick}
        colors={colors}
        folders={
          activeFolder === 0
            ? folders
            : [folders.find((item) => item.id === activeFolder)]
        }
        onFolderColorChange={onFolderColorChange}
        onDropInEnotherFolder={onDropInEnotherFolder}
      />
      
    </div>
  );
}
