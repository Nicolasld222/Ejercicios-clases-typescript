//Crear una clase Película con propiedades como título, duración y director. Crear clase CatalogoPeliculas para almacenar películas en una lista. Agregar búsqueda por título y filtrado por director. Probar con un catálogo de películas.

class Pelicula {
    titulo: string;
    duracion: number; // duración en minutos
    director: string;

    constructor(titulo: string, duracion: number, director: string) {
        this.titulo = titulo;
        this.duracion = duracion;
        this.director = director;
    }
}

class CatalogoPeliculas {
    peliculas: Pelicula[];

    constructor() {
        this.peliculas = [];
    }

    // Método para agregar una película al catálogo
    agregarPelicula(pelicula: Pelicula): void {
        this.peliculas.push(pelicula);
    }

    // Método para buscar película por título
    buscarPorTitulo(titulo: string): Pelicula | null {
        const pelicula = this.peliculas.find(p => p.titulo.toLowerCase() === titulo.toLowerCase());
        return pelicula || null;
    }

    // Método para filtrar películas por director
    filtrarPorDirector(director: string): Pelicula[] {
        return this.peliculas.filter(p => p.director.toLowerCase() === director.toLowerCase());
    }

    // Método para mostrar todas las películas
    mostrarCatalogo(): void {
        console.log("Catálogo de Películas:");
        this.peliculas.forEach(pelicula => {
            console.log(`Título: ${pelicula.titulo}, Duración: ${pelicula.duracion} minutos, Director: ${pelicula.director}`);
        });
    }
}

// Crear instancias de Pelicula y agregarlas al catálogo
const catalogo = new CatalogoPeliculas();

const pelicula1 = new Pelicula("El Señor de los Anillos", 178, "Peter Jackson");
const pelicula2 = new Pelicula("Spider-Man: sin camino a casa", 148, "Jon Watts");


catalogo.agregarPelicula(pelicula1);
catalogo.agregarPelicula(pelicula2);

catalogo.mostrarCatalogo();

const resultadoBusqueda = catalogo.buscarPorTitulo("Inception");
if (resultadoBusqueda) {
    console.log(`Película encontrada: Título: ${resultadoBusqueda.titulo}, Director: ${resultadoBusqueda.director}`);
} else {
    console.log("Película no encontrada.");
}


const peliculasNolan = catalogo.filtrarPorDirector("Peter Jackson");
console.log("Películas dirigidas por Peter Jackson:");
peliculasNolan.forEach(pelicula => {
    console.log(`Título: ${pelicula.titulo}, Duración: ${pelicula.duracion} minutos`);
});