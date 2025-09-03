import './navbar.css'
import Logo from './City-Dental-Care.svg'

function Navbar() {
    return (
        <>

            <header>
                <div id='d1'>
                    <div id="md1">
                        <img src={Logo} alt="logo" />
                    </div>
                </div>
                <div id='d2'>
                    <div class="md2">
                        <div class='md3'>
                            <ion-icon name="time-outline"></ion-icon>
                        </div>

                        <div class="md4">
                            <span>Opening Time</span>
                            <span>Mon-Fri 8:30AM-6PM</span>
                        </div>
                    </div>
                    <div class="md2">

                        <div class='md3'>
                            <ion-icon name="call-outline"></ion-icon>
                        </div>

                        <div class='md4'>
                            <span>Phone</span>
                            <span>+9211111111</span>
                        </div>

                    </div>
                    <div class="md2">
                        <div class='md3'>
                            <ion-icon name="location-outline"></ion-icon>
                        </div>

                        <div class="md4">
                            <span>Location</span>
                            <span>9 Earl Grey St, United Kingdom</span>
                        </div>
                    </div>
                </div>
            </header>

            <hr />

        </>
    )
}

export default Navbar;