import {getContentElement} from '../common/utilities';

export async function getPockemonInfo() {
    const pokemonJson = await getPokemonJson();
    const pokemon = constructPokemonDiv(pokemonJson);

    const content = getContentElement();
    content.replaceChild(pokemon, content.childNodes[0]);
}

async function getPokemonJson() {
    const pokemonName = "kabuto";

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if (response.ok) {
        return await response.json();
    } else {
        alert("HTTP error: " + response.status);
    }
}

function constructPokemonDiv(pokemonJson) {
    const pokemon = document.createElement('div');
    pokemon.classList.add("pokemon");


    const pokemonName = document.createElement('span');
    pokemonName.innerHTML = `Pokemon name: ${pokemonJson.name}`;
    pokemon.appendChild(pokemonName);

    const skills = document.createElement('span');
    skills.innerHTML = 'Skills: ';
    pokemon.appendChild(skills);

    const skillList = document.createElement('ul');
    skillList.classList.add('pokemon__skill-list');

    pokemonJson.abilities.forEach(ability => {
        const skill = document.createElement('li');
        skill.innerHTML = ability.ability.name;
        skillList.appendChild(skill);
    });

    pokemon.appendChild(skillList);

    return pokemon;
}