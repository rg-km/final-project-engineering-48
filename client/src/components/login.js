import { confirmAlert } from "react-confirm-alert";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    confirmAlert({
      title: "Konfirmasi",
      message: "Apakah anda yakin ingin Login dengan akun ini?",
      buttons: [
        {
          label: "Ya",
          onClick: () => kirim(data), href: "/Reading",
        },
        {
          label: "Tidak",
          //onClick: () => alert("Click No"),
        },
      ],
    });
  };

  const kirim = (mydata) => {
    let url = "http://localhost:8080/api/login";
    let config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
      },
    };
    let data = {
      username: mydata["username"],
      password: mydata["password"],
    };
    // axios.post(url, data, config).then(
    //   (response) => {
    //     if(response.status === 200){
    //       navigate("/Reading");
    //       return response.json(); 
    //   }else if(response.status === 401){
    //       console.log("SOMETHING WENT WRONG")
    //       this.setState({ requestFailed: true })
    //   }
    // }),
    //   (error) => {
    //     console.log(error);
    //   }
  };

  const CREATE_LAYOUT = {
    backgroundColor: "#D9D9D9",
  };

  const WRAPPER = {
    backgroundColor: "#FAF2ED",
  };

  const BUTTON = {
    backgroundColor: "#F2CB8A",
  };

  return (
    <div className="container">
      <br></br>
      <div className="row justify-content-sm-center pt-5" style={WRAPPER}>
        <div className="col-sm-6 shadow round pb-3 bg-formnew" style={CREATE_LAYOUT}>
          <h1 className="text-center pt-3 text-secondary">LOGIN</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="form-inline">
            {/* Username */}
            <div className="form-group">
              <label className="col-form-label">Username</label>
              <input
                type="text"
                className={`form-control ${errors.username && "invalid"}`}
                {...register("username", { required: "Username harus diisi" })}
                onKeyUp={() => {
                  trigger("username");
                }}
              />
              {errors.username && <small className="text-danger">{errors.username.message}</small>}
            </div>
    
            {/* password */}
            <div className="form-group">
              <label className="col-form-label">password</label>
              <input
                className={`form-control ${errors.password && "invalid"}`}
                {...register("password", {
                  required: "password harus diisi",
                  minLength: {
                    value: 6,
                    message: "Minimal 6-12 kata",
                  },
                })}
                onKeyUp={() => {
                  trigger("password");
                }}
              ></input>
              {errors.password && <small className="text-danger">{errors.password.message}</small>}
            </div>

            {/* Submit */}
            <input style={BUTTON} type="submit" className="btn bg-navnew my-3 submit" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
}

