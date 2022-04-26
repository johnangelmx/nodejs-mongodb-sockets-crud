import Note from "./models/Note";


export default (io) => {
    io.on('connection', (socket) => {

        const emitNote = async () => {
            const notes = await Note.find();
            io.emit('server:loadnotes', notes)
        }
        emitNote();
        socket.on('client:newnote', async (data) => {
            const newNote = new Note(data)
            const savedNote = await newNote.save()
            io.emit('server:newnote', savedNote)
        })
        socket.on('client:deletenote', async (id) => {
            await Note.findByIdAndDelete(id)
            emitNote();
        })
        socket.on('client:getnotebyid', async (id) => {
            const note = await Note.findById(id)
            io.emit('server:getnotebyid', note)
        })
        socket.on('client:updatenote', async (updatedNote) => {
            const note = await Note.findByIdAndUpdate(updatedNote._id, {
                title: updatedNote.title,
                description: updatedNote.description
            })
            emitNote();
        })
    })
}