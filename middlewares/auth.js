const isLogin = (req, res, next) => {
  if (req.session.admin == null || req.session.admin == undefined) {
    req.flash('alertMessage', 'Session telah habis silahkan signin kembali!!');
    req.flash('alertStatus', 'danger');
    res.redirect('/admin/signin');
  } else {
    next();
  }
};

module.exports = isLogin;
