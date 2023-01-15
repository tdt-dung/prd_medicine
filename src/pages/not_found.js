


import style from "../css/not_found.module.css";

const NotFound = () => {

    document.title = "Not Found";

    return (

        <main>
            <section className={ style.not_found }>
                <p>
                    404 | NOT FOUND
                </p>
            </section>
        </main>
        
    );


}
 
export default NotFound;


