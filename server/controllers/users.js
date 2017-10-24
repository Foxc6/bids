const mongoose = require("mongoose")
const User = mongoose.model("User")


module.exports = {
	login: (req, res) => {
		User.findOne({name: req.body.name})
			.then(user => {
				if(user){
					req.session.user = user
					console.log(req.session.user)
					res.json(req.session.user)
				} else {
					let new_user = new User(req.body)
					new_user.save()
						.then(() => {
							req.session.user = new_user
							console.log(req.session.user)
							res.json(req.session.user)
						})
						.catch(err => {
							console.log("User save error", err)
							res.status(500).json(err)
						})
				}
			})

		
	},
	
	am_i_logged_in: (req, res) => {
		if(req.session.user){
			res.json(req.session.user)
		} else {
			res.status(401).json(false)
		}
	},

	bidProductOne: (req, res) => {
		console.log("The nowPlaying method in the Controller is being hit. User _id being passed is: ", req.body.id)
		let id = req.body.id
        let productOneBid = req.body.productOneBid
        console.log('productOneBid got to controler', productOneBid)
        User.update({_id: id}, {productOneBid: productOneBid}, (err,user) => {
            if(err){
                console.log('Update productOneBid error in controller', err)
            } else {
                console.log('User productOneBid updated at controller')
                res.json(true)
            }
        })
	},

	bidProductTwo: (req, res) => {
		console.log("The nowPlaying method in the Controller is being hit. User _id being passed is: ", req.body.id)
		let id = req.body.id
        let productTwoBid = req.body.productTwoBid
        console.log('productTwoBid got to controler', productTwoBid)
        User.update({_id: id}, {productTwoBid: productTwoBid}, (err,user) => {
            if(err){
                console.log('Update productTwoBid error in controller', err)
            } else {
                console.log('User productTwoBid updated at controller')
                res.json(true)
            }
        })
	},

	bidProductThree: (req, res) => {
		console.log("The nowPlaying method in the Controller is being hit. User _id being passed is: ", req.body.id)
		let id = req.body.id
        let productThreeBid = req.body.productThreeBid
        console.log('productThreeBid got to controler', productThreeBid)
        User.update({_id: id}, {productThreeBid: productThreeBid}, (err,user) => {
            if(err){
                console.log('Update productThreeBid error in controller', err)
            } else {
                console.log('User productThreeBid updated at controller')
                res.json(true)
            }
        })
	},

	logout: (req, res) => {
		req.session.destroy()
		res.redirect("/")
	},

	get_all: (req, res) => {
		User.find({})
			.then(users => res.json(users))
			.catch(err => {
				console.log("User.find error", err)
				res.status(500).json(err)
			})
	},



}