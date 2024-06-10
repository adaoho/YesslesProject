function errorHandler(err, req, res, next) {
  // let messageArray = err.errors.map((err) => err.message);
  let status = 500;
  let message = "Internal Server Error";

  console.log(err);

  switch (err.name) {
    //! General Sequelize Validation
    case "SequelizeValidationError":
      status = 400;
      message = err.errors[0].message;
      break;
    //! Register and Login Error
    case "PasswordEmpty":
      status = 400;
      message = "Password Can't be Empty";
      break;
    case "EmailEmpty":
      status = 400;
      message = "Email Can't be Empty";
      break;
    case "FullNameEmpty":
      status = 400;
      message = "Full Name Can't be Empty";
      break;
    case "InvalidStatus":
      status = 401;
      message = "Account is Inactive";
      break;
    case "imageEmpty":
      status = 400;
      message = "ImageUrl can't be Empty";
      break;
    case "SequelizeUniqueConstraintError":
      status = 400;
      message = "Email already registered!";
      break;

    // ! Create Article Error
    case "titleEmpty":
      status = 400;
      message = "Title Can't be Empty";
      break;
    case "bodyEmpty":
      status = 400;
      message = "Body Can't be Empty";
      break;
    case "userInactive":
      status = 400;
      message = "User is Inactive";
      break;
    case "InvalidUser":
      status = 400;
      message = "Invalid User ID Action";
      break;
    case "slugAlreadyCreate":
      status = 400;
      message = "Article Title Already Created";
      break;
    case "thumbnailEmpty":
      status = 400;
      message = "Thumbnail Can't be Empty";
      break;

    // ? Other Error
    case "InvalidLogin":
      status = 401;
      message = "Invalid email/password";
      break;
    case "JsonWebTokenError":
      status = 401;
      message = "Invalid Token";
      break;
    case "UnableAdmin":
      status = 401;
      message = "Unable Action for Super Admin";
      break;
    case "invalidId":
      status = 401;
      message = "ID not Found";
      break;
    case "unauthenticated":
      status = 401;
      message = "You're Not Authenticated";
      break;
    case "InvalidRole":
      status = 403;
      message = "You're Not Authorized";
      break;
    case "InvalidData":
      status = 404;
      message = "Error data not found";
      break;
    case "NotFound":
      status = 404;
      message = "Error Data Not Found";
      break;
    case "DataEmpty":
      status = 400;
      message = "User didn't have any Data";
      break;
    case "DataAlreadyInput":
      status = 400;
      message = "Data Movement Already Being Input";
      break;
    case "DataAlreadyDelete":
      status = 400;
      message = "Data Movement Already Being Deleted";
      break;

    default:
      status = 500;
      message = "Internal Server Error";
      break;
  }

  res.status(status).json({ message });
}

module.exports = errorHandler;
