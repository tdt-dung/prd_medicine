


import style from "../css/timezone.module.css";

const Timezone = () => {

    document.title = "Your timezone";

    const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

    return (

        <main>
            <section className={ style.timezone_content }>
                <p>
                    Your timezone is: <span className={ style.timezone_value }>{ timeZone }</span>
                </p>
            </section>
        </main>

    );
}

export default Timezone;


