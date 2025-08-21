const database = {
	studentsList: {
		'xamidullo': {
			name: "xamidullo",
			age: 33,
			id: 123,
			tolov: false
		}
	},

	create(user) {
		this.studentsList[user.name] = user
        return this.studentsList
	},

	read(name) {
		if(this.studentsList[name]){
            return this.studentsList[name]
        }else{
            return `user not found`
        }
	},

	update(name, user) {
		if(this.studentsList[name]){
            this.studentsList[name].age = user.age
            this.studentsList[name].tolov = user.tolov
            this.studentsList[name].id = user.id
            this.studentsList[name].name = user.name
        }
        return this.studentsList[name]
	},

	delete(name) {
		delete this.studentsList[name]
		// delete this.studentsList["xamidullo"]
	}
}
database.create({
	name: "xamidullo",
	age: 33,
	id: 123,
	tolov: false // yoki true
})
database.update("xamidullo", {
	name: "azizbek",
	age: 21,
	tolov: true
})
// database.delete("xamidullo")
console.log(database.studentsList)