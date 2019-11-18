--genero
CREATE TABLE IF NOT EXISTS TABLE t_genero (
    id INT AUTO_INCREMENT NOT NULL,
    nome VARCHAR(20) NOT NULL,
    PRIMARY KEY(id)
)

--categoria
CREATE TABLE IF NOT EXISTS TABLE t_categoria (
    id INT AUTO_INCREMENT NOT NULL,
    nome VARCHAR(20) NOT NULL,
    id_genero INT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_genero FOREIGN KEY (id_genero)
    REFERENCES t_genero(id)
)

--curso
CREATE TABLE IF NOT EXISTS t_curso (
    id INT AUTO_INCREMENT NOT NULL,
    nome VARCHAR(20) NOT NULL,
    dt_inicio DATETIME NOT NULL,
    dt_termino DATETIME NOT NULL,
    total_vagas INT NOT NULL,
    total_bolsas INT NOT NULL,
    valor FLOAT NOT NULL,
    carga_horaria INT NOT NULL,
    descricao TEXT NOT NULL,
    pre_requisito TEXT NOT NULL,
    metodo TEXT NOT NULL,
    mercado_trabalho TEXT NOT NULL,
    programa TEXT NOT NULL,
    certificacao TEXT NOT NULL,
    documentos_necessarios TEXT NOT NULL,
    id_categoria INT NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_categoria FOREIGN KEY (id_categoria)
    REFERENCES t_categoria(id)

)
