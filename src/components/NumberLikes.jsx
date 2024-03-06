

export default function NumberLikes({likes}) {
  const formatNumber = () => {
    return likes.toLocaleString('es-ES');
  }

  return (
    <div>
        <label className="label-likes">{formatNumber()} Me gusta</label>

    </div>
  )
}
