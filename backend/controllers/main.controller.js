const getData = async (req, res) => {
    const data = {
        message: 'Connected to Backend! via routers and controllers'
    }
    console.log('Data: ', {data});
    res.json(data);
};

module.exports = {
    getData,
};
