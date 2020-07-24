import React from "react";
import Sidebar from "./components/SideBar";
import TaskBar from "./components/TaskBar";
import DataBaseInitial from "./assets/db.json";

export default function App() {
  const [activeFolder, setActiveFolder] = React.useState(0);
  const [folders, setFolders] = React.useState(
    localStorage.getItem("folders")
      ? JSON.parse(localStorage.getItem("folders"))
      : () => {
          localStorage.setItem(
            "folders",
            JSON.stringify(DataBaseInitial.lists)
          );
          return JSON.parse(localStorage.getItem("folders"));
        }
  );
  const [tasks, setTasks] = React.useState(
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : () => {
          localStorage.setItem("tasks", JSON.stringify(DataBaseInitial.tasks));
          return JSON.parse(localStorage.getItem("tasks"));
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
    const newFolders = [...folders];
    newFolders.push({
      name: name,
      colorId: colorId,
      id: folders[folders.length - 1] ? folders[folders.length - 1].id + 1 : 1,
    });
    /*     setFolders(newFolders);
    refreshStorage("folders", newFolders); */
    reIndex(newFolders, tasks);
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
    const newFolders = [...folders];
    const itemId = newFolders.findIndex((item) => item.id === id);
    newFolders.splice(itemId, 1);
    let newTasks = [...tasks];
    newTasks = newTasks.filter((item) => item.listId !== id);
    reIndex(newFolders, newTasks);
  };
  const onTaskClick = (id) => {
    const newTasks = [...tasks];
    newTasks.find((item) => item.id === id).completed = !newTasks.find(
      (item) => item.id === id
    ).completed;
    reIndex(folders, newTasks);
  };
  const onTaskChange = (id, value) => {
    const newTasks = [...tasks];
    newTasks.find((item) => item.id === id).text = value;
    reIndex(folders, newTasks);
  };
  const onAddTaskButton = (FolderId) => {
    console.log(FolderId);
    const newTask = {
      listId: FolderId,
      text: "",
      completed: false,
      id: tasks[tasks.length - 1] ? tasks[tasks.length - 1].id + 1 : 1,
    };
    reIndex(folders, [...tasks, newTask]);
  };
  const onTaskDelete = (taskId) => {
    const newTasks = [...tasks];
    const itemId = newTasks.findIndex((item) => item.id === taskId);
    newTasks.splice(itemId, 1);
    reIndex(folders, newTasks);
  };
  folders.map((item) => {
    item.color = colors.find((color) => color.id === item.colorId).hex;
    return item;
  });
  const reIndex = (folders, tasks) => {
    const newFolders = [...folders];
    let newTasks = [...tasks];
    newTasks.map((task, taskIndex) => {
      task.id = taskIndex + 1;
      return task;
    });
    newFolders.map((folder, folderIndex) => {
      const foldersTasks = newTasks.filter((task) => {
        return task.listId === folder.id;
      });
      foldersTasks.map((task) => {
        task.listId = folderIndex + 1;
        return task;
      });
      folder.id = folderIndex + 1;
      return folder;
    });
    setFolders(newFolders);
    refreshStorage("folders", newFolders);
    setTasks(newTasks);
    refreshStorage("tasks", newTasks);
  };
  const onFolderChange = (id, value) => {
    const newFolders = [...folders];
    newFolders.find((item) => item.id === id).name = value;
    reIndex(newFolders, tasks);
  };
  const onFolderColorChange = (id, value) => {
    const newFolders = [...folders];
    newFolders.find((item) => item.id === id).colorId = value;
    reIndex(newFolders, tasks);
  }

  return (
    <div className="todo">
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
      />
      <TaskBar
        onFolderChange={onFolderChange}
        onTaskDelete={onTaskDelete}
        onAddTaskButton={onAddTaskButton}
        onTaskChange={onTaskChange}
        onTaskClick={onTaskClick}
        colors = {colors}
        folders={
          activeFolder === 0
            ? folders
            : [folders.find((item) => item.id === activeFolder)]
        }
        tasks={tasks}
        onFolderColorChange={onFolderColorChange}
      />
    </div>
  );
}
