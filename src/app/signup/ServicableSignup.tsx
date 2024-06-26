import { useState, createContext } from "react";
import Diagnosis from "./components/Diagnosis";
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import { Button } from "@nextui-org/react";

enum AppointmentFormState {
    DIAGNOSIS,
    SCHEDULE,
    CONTACT
}

const AppointmentFormStateToComponentMap = {
    [AppointmentFormState.DIAGNOSIS]: <Diagnosis />,
    [AppointmentFormState.SCHEDULE]: <Schedule />,
    [AppointmentFormState.CONTACT]: <Contact />
};

const AppointmentFormStateToSignupFormMap: { [key in AppointmentFormState]: keyof SignupForm } = {
    [AppointmentFormState.DIAGNOSIS]: 'diagnosis',
    [AppointmentFormState.SCHEDULE]: 'schedule',
    [AppointmentFormState.CONTACT]: 'contact'
};

type Question = {}

type DiagnosisForm = {
    deviceType: string,
    deviceMake: string,
    deviceModel: string,
    serialNumber: string,
    questions: Question[],
}

type ScheduleForm = {}

type ContactInformationForm = {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    address_line_1: string;
    address_line_2: string;
    city: string;
    state: string;
    zipcode: string;
}

type SignupForm = {
    diagnosis: DiagnosisForm;
    schedule: ScheduleForm;
    contact: ContactInformationForm;
}

class Signup implements SignupForm {
    diagnosis: DiagnosisForm;
    schedule: ScheduleForm;
    contact: ContactInformationForm;

    constructor() {
        this.diagnosis = {
            deviceType: "",
            deviceMake: "",
            deviceModel: "",
            serialNumber: "",
            questions: [], 
        },   
        this.schedule = {

        },
        this.contact = {
            email: "",
            firstName: "",
            lastName: "",
            phone: "",
            address_line_1: "",
            address_line_2: "",
            city: "",
            state: "",
            zipcode: ""
        }
    }
}

type FormContextType = {
    form: Signup;
    onFormChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) =>  void
}

export const FormContext = createContext<FormContextType>({
    form: new Signup(),
    onFormChange: () => {}
});

export default function AppointmentSignup() {
    const [appointmentFormState, setAppointmentFormState] = useState<AppointmentFormState>(AppointmentFormState.DIAGNOSIS);
    const [form, setForm] = useState(new Signup());

    const onFormChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = 'target' in e ? e.target : e;
        updateForm(name, value);
    }

    const updateForm = (name: string, value: string) => {
        setForm(prevForm => ({
            ...prevForm,
            [AppointmentFormStateToSignupFormMap[appointmentFormState]]: {
                ...prevForm[AppointmentFormStateToSignupFormMap[appointmentFormState]],
                [name]: value
            }
        }));
    }

    const handleBack = () => (appointmentFormState >= 1) && setAppointmentFormState(appointmentFormState - 1);

    const handleForward = () => (appointmentFormState <= 1) && setAppointmentFormState(appointmentFormState + 1);

    return (
        <div className="max-w-lg m-auto my-20">
            <FormContext.Provider value={{ form, onFormChange }}>
                {AppointmentFormStateToComponentMap[appointmentFormState]}
            </FormContext.Provider>
            <div>
                <Button color="primary" onClick={handleBack}>Go Back</Button>
                <Button color="primary" onClick={handleForward}>Next</Button>
            </div>
        </div>
    );
}