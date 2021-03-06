import axios from 'axios';
import Server from './Server';

export async function SignUpform(dataForm) {

  var config = {
    method: 'post',
    url: 'https://myadminrozgar.work/api/user/signup',
    headers: {
      'api-key': 'unkivzpwlqnqwybybrplflrvfuyyhkvc',
      'app-type': 'user',
    },
    data: dataForm,
  };
  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;

}
export async function OTPVerify(data) {
  var config = {
    method: 'post',
    url: 'https://myadminrozgar.work/api/verify/phone',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'api-key':'unkivzpwlqnqwybybrplflrvfuyyhkvc',
      'app-type':'user'
    },
    data: data,
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
export async function LoginForm(data) {
  var config = {
    method: 'post',
    url: `${Server}/api/login`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
