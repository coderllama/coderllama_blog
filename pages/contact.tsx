import Head from 'next/head'


const ContactPage = () => {
    return (
        <div>
            <Head >
                <title>
                    Contact CodeIBilly
                </title>
            </Head>
            <h1>
                Have burning questions? ask away!
            </h1>
            <form method='post'>
                <label > Your Email:  </label>
                <input type="email" required placeholder="John.Doe@email.com" />
                <br></br>
                <label> Your Name: </label>
                <input type="text" placeholder="John Doe" />
                <br></br>
                <textarea>
                </textarea>
                <br></br>
                <input type="submit" value="Send" />
            </form>
        </div>
     )
}

export default ContactPage