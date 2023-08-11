import { useEffect, useState } from "react";

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

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
        <Container maxWidth="md">
            {persons && persons.map((person, index) => (
                <Stack direction="row" spacing={1}>
                    <Chip
                        label={person.name}
                        variant="outlined"
                        onClick={handleClick}
                    />
                </Stack>
            ))}
        </Container>
    )
}

export default Persons;