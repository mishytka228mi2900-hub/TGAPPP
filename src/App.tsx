function App() {

window.Telegram?.WebApp?.ready();

const user = window.Telegram?.WebApp?.initDataUnsafe?.user;
// const theme = window.Telegram?.WebApp?.themeParams;


  return (
    <>
      <div className="border p-10">
        hello, {user?.first_name}
      </div>
      <div>
        <h1>first telegram mini app</h1>
      </div>
    </>
  )
}


export default App
