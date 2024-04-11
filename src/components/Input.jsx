
function Input({ tipo, nome, valor, ph }) {

  return (
    <>
        <input type={tipo} name={nome} value={valor} placeholder={ph} />
    </>
  )
}

export default Input

