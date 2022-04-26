import { deleteNote, getNoteById, newNote, updateNote } from "./socket.js";
const notesList = document.querySelector("#notesList");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
let saveID = "";

const noteUI = (note) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card card-body rounded-8 mb-2 animate__animated animate__fadeInUp">
        <div class="d-flex justify-content-between">
            <h1>${note.title}</h1>
        <div class="animate__animated animate__fadeInUp"> 
        <button class="btn btn-danger  delete"data-id="${note._id}">Delete</button>
        <button class="btn btn-secondary update"data-id="${note._id}">Update</button>
        </div>
        </div>
        
        <p class="animate__animated animate__fadeInUp">${note.description}</p>
    </div>
    `;
    const btnDelete = div.querySelector(".delete");
    const btnUpdate = div.querySelector(".update");
    btnDelete.addEventListener("click", (e) => {
        deleteNote(btnDelete.dataset.id);
    });
    btnUpdate.addEventListener("click", (e) => {
        getNoteById(btnUpdate.dataset.id);
    });
    return div;
};
const renderNotes = (notes) => {
    notesList.innerHTML = "";
    notes.forEach((note) => notesList.append(noteUI(note)));
};
const onHandleSubmit = (e) => {
    e.preventDefault();
    if (saveID) {
        console.log("actualizando");
        updateNote(saveID, title.value, description.value);
    } else {
        newNote(title.value, description.value);
    }
    saveID = "";
    title.value = "";
    description.value = "";
};

const appendNote = (note) => {
    notesList.append(noteUI(note));
};
const fillForm = (note) => {
    title.value = note.title;
    description.value = note.description;
    saveID = note._id;
};

export { onHandleSubmit, renderNotes, appendNote, fillForm };
