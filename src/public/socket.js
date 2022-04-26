const socket = io()

const loadNotes = (callback) => {
    socket.on('server:loadnotes', callback)
}

const newNote = (title, description) => {
    socket.emit('client:newnote', {
        title,
        description
    })
}
const onNewNote = (callback) => {
    socket.on('server:newnote', callback)
}
const deleteNote = (id) => {
    socket.emit('client:deletenote', id)
}
const getNoteById = (id) => {
    socket.emit('client:getnotebyid', id)
}
const onSelectNote = (callback) => {
    socket.on('server:getnotebyid', callback)
}
const updateNote = (id, title, description) => {
    socket.emit('client:updatenote', { _id: id, title, description })
}
export {
    loadNotes,
    newNote,
    onNewNote,
    deleteNote,
    getNoteById,
    onSelectNote,
    updateNote
}