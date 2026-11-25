// Lista de cartões no método STAR (Situação, Tarefa, Ação, Resultado) + linha extra opcional
export default function StarList({ items, labels, extraLabel, openFirst = true }) {
  return (
    <div className="stars">
      {items.map((item, i) => (
        <details key={item.title} className="star" open={openFirst && i === 0}>
          <summary>
            <span className="star__title">{item.title}</span>
            <span className="star__result">{item.r}</span>
          </summary>
          <dl className="star__body">
            {["s", "t", "a", "r"].map((k) => (
              <div key={k} className={`star__row star__row--${k}`}>
                <dt><span className="star__letter">{k.toUpperCase()}</span>{labels[k]}</dt>
                <dd>{item[k]}</dd>
              </div>
            ))}
            {item.ai && (
              <div className="star__row star__row--ai">
                <dt><span className="star__letter">✦</span>{extraLabel}</dt>
                <dd>{item.ai}</dd>
              </div>
            )}
          </dl>
        </details>
      ))}
    </div>
  );
}
