import React, { Component } from 'react'
import { Button, Image } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart
} from "@fortawesome/free-solid-svg-icons";

export default class Sukses extends Component {
    render() {
        return (
            <div className="mt-4 text-center">
                <Image src="assets/images/sukses.png" width="500" />
                <h2>Sukses Pesan</h2>
                <p>Terimakasih sudah memesan <FontAwesomeIcon icon={faHeart} className="mr-2 text-danger" /></p>
                <Button variant="primary" as={Link} to="/">
                    Kembali
                </Button>
            </div>
        )
    }
}
