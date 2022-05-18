import React, { Component } from "react";
import $ from "jquery";
import event from "./event";
class Agenda extends Component {
    constructor() {
        super()
        this.state = {
            event: [
                {
                    isbn:"12345", nama:"Bulan", tanggal:"Tere Liye",
                   
                    
                    

                },
                {

                    isbn: "12346", nama: "Anak Badai", tanggal: "Tere Liye",
                   
                   
                },
                {
                    isbn: "54321", nama: "Bumi", tanggal: "Tere Liye",
                   
                   

                },
            ],
            action: "",
            isbn: "",
            nama : "",
            tanggal: "",
            selectedItem: null,
        }
        this.state.filterEvent = this.state.event


    }
    render() {
        return (
            <div className="container">
                <input type="text" className="form-control my-2" placeholder="Searching"
                    value={this.state.keyword}
                    onChange={ev => this.setState({ keyword: ev.target.value })}
                    onKeyUp={ev => this.searching(ev)}
                />
                <div className="row">
                    {this.state.filterEvent.map((item, index) => (
                        <event

                            nama={item.nama}
                            tanggal={item.tanggal}
                            onEdit={() => this.Edit(item)}
                            onDrop={() => this.Drop(item)}
                        />
                    ))}
                </div>

                <button className="btn btn-success" onClick={() => this.Add()}>

                    Tambah Data
                </button>
                {/* component modal sbg control manipulasi data */}
                <div className="modal" id="modal_event">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* modal header */}
                            <div className="modal-header">
                                Form Event
                            </div>
                            {/* modal body */}
                            <div className="modal-body">
                                <form onSubmit={ev => this.Save(ev)}>
                                    Nama Event

                                    <input type="text" className="form-control mb-2"

                                        value={this.state.nama}
                                        onChange={ev => this.setState({
                                            nama:
                                                ev.target.value
                                        })}
                                        required />
                                    Tanggal 

                                    <input type="date" className="form-control mb-2"

                                        value={this.state.tanggal }
                                        onChange={ev => this.setState({
                                            tanggal: ev.target.value
                                        })}
                                        required />
                                   
                    

                                    <button className="btn btn-info btn-block" type="submit">

                                        Simpan
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    Add = () => {

        // menampilkan komponen modal
        $("#modal_event").show()
        this.setState({
            isbn: Math.random(1, 10000000),

            nama: "",
            tanggal: "",
            action: "insert"
        })
    }
    Edit = (item) => {
        // menampilkan komponen modal
        $("#modal_event").show()
        this.setState({
            isbn: item.isbn,
            nama: item.nama,
            tanggal: item.tanggal,
            action: "update",
            selectedItem: item
        })
    }
    Save = (event) => {
        event.preventDefault();
        // menampung data state buku
        let tempEvent = this.state.event
        if (this.state.action === "insert") {
            // menambah data baru
            tempEvent.push({
                isbn: this.state.isbn,
                nama: this.state.nama,
                tanggal: this.state.tanggal,
                
            })

        } else if (this.state.action === "update") {
            // menyimpan perubahan data
            let index = tempEvent.indexOf(this.state.selectedItem)
            tempEvent[index].isbn = this.state.isbn
            tempEvent[index].nama = this.state.nama
            tempEvent[index].tanggal = this.state.tanggal
           
        }
        this.setState({ buku: tempEvent })
        // menutup komponen modal_buku
        $("#modal_event").hide()
    }
    Drop = (item) => {
        // beri konfirmasi untuk menghapus data
        if (window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
            // menghapus data
            let tempEvent = this.state.event
            // posisi index data yg akan dihapus
            let index = tempEvent.indexOf(item)
            // hapus data
            tempEvent.splice(index, 1)
            this.setState({ buku: tempEvent })
        }
    }
        ;
    searching = event => {
        if (event.keyCode === 13) {
            // 13 adalah kode untuk tombol enter
            let keyword = this.state.keyword.toLowerCase()
            let tempEvent = this.state.event
            let result = tempEvent.filter(item => {
                return item.judul.toLowerCase().includes(keyword) ||
                    item.penulis.toLowerCase().includes(keyword) ||
                    item.penerbit.toLowerCase().includes(keyword)
            })
            this.setState({ filterEvent: result })
        }
    }
}


export default Agenda;