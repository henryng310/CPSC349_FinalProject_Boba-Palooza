 
const express = require('express')
const app = express()
const cors = require('cors')
const mongo = require('mongodb')
const MongoClient = require('mongodb').MongoClient
const url = "mongodb://localhost:27017/"

app.set('port', 3000)

app.use(express.json())
app.use(cors())

app.get('/api/drinksordered/:id', function(req, res){
	console.log(`${req.params.id}`)
	MongoClient.connect(url, function(err, conn) {
		if (err) console.log(err)
		else {
			const db = conn.db('drinkorder')
			const coll = db.collection('drinksordered')
			const criteria = {_id: new mongo.ObjectID(req.params.id)}
			coll.find(criteria).toArray(function(err, result) {
				if (err) console.log(err)
				else {
					conn.close()
					res.type('application/json')
					res.status(200)
					res.json(result)					
				}
			})
		}
	})
})

app.get('/api/drinksordered', function(req, res){
	if (Object.keys(req.query).length == 0) {
		MongoClient.connect(url, function(err, conn) {
			if (err) console.log(err)
			else {
				const db = conn.db('drinkorder')
				const coll = db.collection('drinksordered')
				coll.find({}).toArray(function(err, result) {
					if (err) console.log(err)
					else {
						conn.close()
						res.type('application/json')
						res.status(200)
						res.json(result)					
					}
				})
			}
		})	
	}
})

app.post('/api/drinksordered', function(req, res) {
	console.log(req.body)
	MongoClient.connect(url, function(err, conn) {
		if (err) console.log(err)
		else {
			const db = conn.db('drinkorder')
			const myObj = new Object()
			myObj.drinkSize = req.body.drinkSize
			myObj.drinkFlavor = req.body.drinkFlavor
			myObj.bobaAmnt = req.body.bobaAmnt
			const coll = db.collection('drinksordered')
			coll.insertOne(myObj, function(err, result) {
				if (err) console.log(err)
				else {
					conn.close() 
					res.type('application/json')
					res.status(200)
					res.json(result)					
				}
			})
		}
	})
})

app.listen(app.get('port'), function(){
	console.log('Express server started on http://localhost:' + app.get('port'));
	console.log(__dirname)
})
