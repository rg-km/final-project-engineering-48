import { confirmAlert } from "react-confirm-alert";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css";
import "react-confirm-alert/src/react-confirm-alert.css";

export default function CreateArticle(props) {
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
          <h1 className="text-center pt-3 text-secondary">Form Add</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="form-inline">
            {/* Judul */}
            <div className="form-group">
              <label className="col-form-label">Judul :</label>
              <input
                type="text"
                className={`form-control ${errors.judul && "invalid"}`}
                {...register("judul", { required: "Judul harus diisi" })}
                onKeyUp={() => {
                  trigger("judul");
                }}
              />
              {errors.judul && <small className="text-danger">{errors.judul.message}</small>}
            </div>

            {/* Kategori */}
            <label className="col-form-label">Kategori :</label>
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg Kategori"
              {...register("kategori", { required: "Kategori harus diisi" })}
              onChange={(e) => {
                console.log(e.target.value);
                trigger("kategori");
              }}
            >
              <option value="">Pilih Kategori</option>
              <option value="science">Science</option>
              <option value="horror">Horror</option>
              <option value="technology">Technology</option>
              <option value="fiction">Fiction</option>
            </select>
            {errors.kategori && <small className="text-danger">{errors.kategori.message}</small>}

            {/* Isi */}
            <div className="form-group">
              <label className="col-form-label">Isi :</label>
              <textarea
                className={`form-control ${errors.isi && "invalid"}`}
                {...register("isi", {
                  required: "Isi harus diisi",
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
            <input style={BUTTON} type="submit" className="btn bg-navnew my-3 submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
