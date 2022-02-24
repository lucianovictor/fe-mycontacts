import PropTypes from 'prop-types';

import { useState, useRef } from 'react';
import { Form, ButtonContainer } from './styles';

import FormGroup from '../FormGroup';
import Input from '../input';
import Select from '../Select';
import Button from '../Button';

export default function ContactFrom({ buttonLabel }) {
  const [name, setName] = useState('');

  const emailInput = useRef(null);

  return (
    <Form>
      <FormGroup>
        <Input
          value={name}
          placeholder="Nome"
          onChange={(event) => setName(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Input placeholder="E-mail" ref={emailInput} />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Telefone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="Instagram"> Instagram</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactFrom.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
