import { event } from "jquery";
import React from "react"
class Event extends React.Component {
    render() {
        return (
            <div className="col-lg-6 col-sm-12 p-2">
                <div className="card">
                    <div className="card-body row">
                        {/* menampilkan Gambar / cover */}
                        
                        {/* menampilkan deskripsi */}
                        <div className="col-7">
                            <h5 className="text-info">

                                {this.props.judul}
                            </h5>

                            <h6 className="text-dark">
                                nama event: {this.props.nama}
                            </h6>

                            <h6 className="text-danger">

                                tanggal : {this.props.tanggal}
                            </h6>

                           
                            {/* button untuk mengedit */}
                            <button className="btn btn-sm btn-primary m-1"
                                onClick={this.props.onEdit}>
                                Edit
                            </button>
                            {/* button untuk menghapus */}
                            <button className="btn btn-sm btn-danger m-1"
                                onClick={this.props.onDrop}>
                                Hapus
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default event;