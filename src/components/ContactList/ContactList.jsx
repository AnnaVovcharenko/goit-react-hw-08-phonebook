import { ContactItem } from '../ContactItem/ContactItem';
import { ListUl, ListDiv } from './ContactList.styled';
import {  useSelector } from 'react-redux';
import Loading  from "../../components/Loading/Loading";
import { Error } from "../EMesseage/EMesseage";
// import { getContacts} from "../../redux/selectors";
import { selectVisibleContacts, selectError, selectLoading } from "../../redux/contacts/contSelectors";

const ContactList = () => {
  // const contacts = useSelector(getContacts);
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectLoading); 
  const error = useSelector(selectError);
 
  return (
    <ListDiv>
      <ListUl>
        {isLoading && <Loading/>}
        {error && <Error/>}
        {contacts.map(contact  => {
          return (<ContactItem key={contact.id}
          contact={contact}
          /> )
         
        })}
      </ListUl>
    </ListDiv>
  );
};
export default ContactList;