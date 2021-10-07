let { people } = require('./data');

const getPeople = (req, res) => {
    res.status(200);
    res.json({ success : true,
                data : people })
}
const createPerson = (req, res) => {
    const { name } = req.body;
    if(!name){
        return res.status(400).json({ success : false, msg : 'plese provide name'})
    }
    res.status(201).send( { success : true, data : [...people, name]})
}

// const deletePerson = (req, res) => {
//     const person = people.find((person) => {person.id = Number(req.params.id)})
//     if(!person){
//         return res
//             .status(404)
//             .json({ Success : false, 
//                     msg : `no person with ${req.params.id}`,
//                     })
//     }
//     const newPeople = people.filter(
//         (person) => person.id !== Number
//     )
// }
module.exports = {
    getPeople, 
    createPerson,
}