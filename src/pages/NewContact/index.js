import PageHeader from '../../components/PageHeader';
import ContactFrom from '../../components/Contactform';

export default function NewContact() {
  return (
    <>
      <PageHeader
        title="Novo contato"
      />

      <ContactFrom
        buttonLabel="Cadastrar"
      />
    </>

  );
}
