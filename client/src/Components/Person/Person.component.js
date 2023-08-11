import { useEffect, useState } from "react";

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';

import FamilyService from "../../Services/Person.service";

const Persons = () => {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        getPersons();
    }, []);

    const getPersons = () => {
        FamilyService.getAll()
            .then(response => {
                setPersons(response.data)
            })
            .catch(e => {
                console.log(e);
            });
    }

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    return (
        <Stack direction="row" spacing={1}>
            {persons && persons.map((person, index) => (
                <Chip
                    key={person.id}
                    label={person.name}
                    variant="outlined"
                    avatar={<Avatar alt="Natacha" src={person.thumbnail} />}
                    onClick={handleClick}
                />
            ))}
        </Stack>
    )
}

export default Persons;