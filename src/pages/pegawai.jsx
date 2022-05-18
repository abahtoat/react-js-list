import React, { Component } from 'react';
import $ from 'jquery';
import axios from 'axios';

class Pegawai extends Component {

    constructor() {
        super();
        this.state = {
            pegawai: [], // array pegawai untuk menampung data pegawai  
            nip: "",
            nama: "",
            alamat: "",
            action: "",
            search: "",
        }

    }

    render() {
        return (
            <div className="m-3 card">
                <div className="card-header bg-info text-white">Data Pegawai</div>
                <div className="card-body">
                    <input type="text" className="form-control mb-2" name="search" value={this.state.search} onChange={this.bind} onKeyUp={this.findPegawai} placeholder="Pencarian..." />
                    {/* tampilan tabel pegawai */}
                    <table className="table">
                        <thead>
                            <tr>
                                <th>NIP</th>
                                <th>Nama</th>
                                <th>Alamat</th>
                                <th>Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.pegawai.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.nip}</td>
                                        <td>{item.nama}</td>
                                        <td>{item.alamat}</td>
                                        <td>
                                            <button classsName="btm btn-sm btn-info m-1 data-toggle=" modal data-target="#modal onClick={() => this.edit(item)}">
                                                Edit
                                            </button>
                                            <button className="btn btn-sm btn-danger m-1 onClick={() => this.Drop(item.nip)}">
                                                Hapus
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                    <button className="btn btn-succes" onClick={this} data-toggle="modal" data-target="#modal">
                        Tambah Data
                    </button>

                    {/* modal form pegawai */}
                    <div className="modal fade" id="modal">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    Form Pegawai
                                </div>
                                <form onSubmit={this.Save.Pegawai}>
                                    <div className="modal-body">
                                        NIP
                                        <input type="number" name="nip" value={this.state.nip} onChange={this.bind} className="form-control" required />
                                        Nama
                                        <input type="text" name="nama" value={this.state.nip} onChange={this.bind} className="form-control" required />
                                        Alamat
                                        <input type="text" name="alamat" value={this.state.nip} onChange={this.bind} className="form-control" required />
                                    </div>
                                    <div className="modal-footer">
                                        <button className="btn btn-sm btn-succes" type="submit">
                                            Simpan
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );

    }
}
export default Pegawai;
    