const User = require('../models/user')


exports.getIndex = (req, res, next) => {
    res.render('index.ejs')
}

exports.addUser = (req, res, next) => {
    console.log('i am running..')

    const name = req.body.name;
    const email = req.body.email;
    const gender = req.body.gender;
    const category = req.body.category;
    const income = +req.body.income;
    let status = false
    if (income <= 200000) {
        status = true
    }
    const user = new User({
        name,
        email,
        gender,
        category,
        income,
        status
    })
    user.save()
        .then(user => {
            console.log(user);
        })
        .catch(err => {
            console.log(err);
        })
    if (status === true) {
        res.render('message', {
            status: true
        })
    } else {
        res.render('message', {
            status: false
        })
    }
}

exports.rejectedStudentsList = (req, res, next) => {
    User.find({ status: false })
        .then(users => {
            res.render('show-students-list', {
                users: users,
                message:'List of Rejected students'
            })
        })
}

exports.selectedStudentsList = (req, res, next) => {
    User.find({ status: true })
        .then(users => {
            res.render('show-students-list', {
                users: users,
                message:'List of Selected students'
            })
        })
}