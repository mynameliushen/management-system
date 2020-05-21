
const REQUEST_OK = 1
const REQUEST_FAIL = 2

const proxy = {
  'GET /api/user': {id: 1, username: 'kenny', sex: 6 },
  'GET /api/user/list': [
    {id: 1, username: 'kenny', sex: 6 },
    {id: 2, username: 'kenny', sex: 6 }
  ],
  'POST /api/login': (req, res) => {
    const { password, username } = req.body;
    if (password === '888888' && username === 'admin') {
      return res.send({
        errno: 0,
        token: "sdfsdfsdfdsf",
        data: {id: 1, name: '刘神' }
      });
    } else {
      return res.send({errno: REQUEST_FAIL, msg: '用户名或者密码不对'});
    }
  },
  'DELETE /api/user/:id': (req, res) => {
    console.log('---->', req.body)
    console.log('---->', req.params.id)
    res.send({ status: 'ok', message: '删除成功！' });
  }
}
module.exports = proxy;