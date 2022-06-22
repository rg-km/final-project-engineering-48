import { confirmAlert } from "react-confirm-alert";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css";
import "react-confirm-alert/src/react-confirm-alert.css";

export default function CreateArticle(props){
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
              message: "Apakah anda yakin ingin menyimpan data ini?",
              buttons: [
                {
                  label: "Ya",
                  onClick: () => console.log(data),
                },
                {
                  label: "Tidak",
                  //onClick: () => alert("Click No"),
                },
              ],
            });
          };

          const CREATE_LAYOUT = {
            backgroundColor: "#D9D9D9",
          }

          const WRAPPER = {
            backgroundColor: "#FAF2ED",
          }

      return(
            <div className="container">
        <div className="row justify-content-sm-center pt-5" style={WRAPPER} >
          <div className="col-sm-6 shadow round pb-3 bg-formnew" style={CREATE_LAYOUT}>
            <h1 className="text-center pt-3 text-secondary">Form Add</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="form-inline">
              {/* Judul */}
              <div className="form-group">
                <label className="col-form-label">Judul :</label>
                <input
                  type="text"
                  className={`form-control ${errors.judul && "invalid"}`}
                  {...register("judul", { required: "Judul is Required" })}
                  onKeyUp={() => {
                    trigger("judul");
                  }}
                />
                {errors.judul && <small className="text-danger">{errors.judul.message}</small>}
              </div>

              {/* Tipe */}
              <div className="form-group">
                <label className="col-form-label">Tipe :</label>
                <input
                  type="text"
                  className={`form-control ${errors.tipe && "invalid"}`}
                  {...register("tipe", { required: "Tipe is Required" })}
                  onKeyUp={() => {
                    trigger("tipe");
                  }}
                />
                {errors.tipe && <small className="text-danger">{errors.tipe.message}</small>}
              </div>

              {/* Genre */}
              <div className="form-group">
                <label className="col-form-label">Genre :</label>
                <input
                  type="text"
                  className={`form-control ${errors.genre && "invalid"}`}
                  {...register("genre", { required: "Genre is Required" })}
                  onKeyUp={() => {
                    trigger("genre");
                  }}
                />
                {errors.genre && <small className="text-danger">{errors.genre.message}</small>}
              </div>

              {/* Isi */}
              <div className="form-group">
                <label className="col-form-label">Isi :</label>
                <textarea
                  className={`form-control ${errors.isi && "invalid"}`}
                  {...register("isi", {
                    required: "Isi is Required",
                    minLength: {
                      value: 10,
                      message: "Minimum Required length is 10",
                    },
                    maxLength: {
                      value: 1000,
                      message: "Maximum allowed length is 1000 ",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("isi");
                  }}
                ></textarea>
                {errors.isi && <small className="text-danger">{errors.isi.message}</small>}
              </div>

              {/* Submit */}
              <input type="submit" className="btn bg-navnew my-3 submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
      )
}