
const Conversatii = () => {
    return (
        <div class="conversatii">
            
            <div class="mesaje">
                <div class="profil">
aici vin conversatiile

                </div>
            </div>
        </div>
    )
}

const MesajPrimit = (props) => {
    return (
        <div class="container">
            <img src="https://i.pravatar.cc/50" alt="Avatar"></img>
                <p>
                  {props.mesaj}
                </p>
                <span class="time-right">{props.ora}</span>
            </div>

    )
}

const MesajTrimis = ( props ) => {
    return (
        <div class="container darker">
            <img src="https://i.pravatar.cc/50" alt="Avatar"></img>
            <p>{props.mesaj}</p>
            <span class="time-left">{props.ora}</span>
        </div>
    );
}

const Mesajuser = () => {
    return (
        <div class="mesajuser">
            <MesajPrimit ora={"08:34"} mesaj={"Hey lads, tough game yesterday. Let's talk about what went wrong and how we can improve 🙂"} />
            <MesajPrimit ora={"08:35"} mesaj={"Agreed, Harry 👍.We had some good moments, but we need to be more clinical in front of the goal 👀."} />
            <MesajTrimis ora={"08:36"} mesaj={"We need to control the midfield and exploit their defensive weaknesses. Bruno and Paul, I'm counting on your creativity.Marcus and Jadon, stretch their defense wide.Use your pace and take on their full-backs."}/>
            <MesajTrimis ora={"08:38"} mesaj={"da da"}/>
        </div>
    )
}

const Mesaje = () => [
    return (
        <div class="profil">
            <img src="https://i.pravatar.cc/70" alt="Avatar"></img>
            <h1>Iulia Praja</h1>
        </div>

    )
]

function App() {
    return (
      <div>

        <Conversatii />
        <Mesajuser />

      </div>
    );
  }