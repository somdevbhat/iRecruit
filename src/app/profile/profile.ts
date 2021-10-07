export class Profile {
    /*emailId: String; 
    candidateName: String;
    designation: String;
    
    currentEmployer: String;
    currentLocation: String; 
    
    id: String;
    mobileNo: String;
    profileType: String;
    profileSource: String;
    
    status: String;
    referredBy: String;*/
    
    candidateName: string;
	emailId: string;
	mobileNo: string;
	altmobileNo: string;
	passportNo: string;
	skypeId: string;
	currentLocation: string
	address: string;
	qualifications: Array<{}>=[{percentage:60}];
	certifications: Array<{}>=[{score:60}];
	trainings: Array<{}>=[{}];
	languages: Array<{}>=[{}];
	primarySkills: string [];
	additionalSkills: string;
	currentDesignation: string;
	isReferral: boolean = false;
	 expYear: string;
	 expMonth: string;
	 uploadedFileName: string;
	 designation: string;
	 pancardNo: string;
	 notes: string;
	 currentEmployer: string;
	 referredBy: string;
	 hrAssigned: string;
	 jobcodeProfile: string [];
	 interviewSet: boolean;
	 status: string;
	 referralRelation: string;
	 tenureYear: string;
	 tenureMonth: string;
	 screeningStatus: string;
	 compatibilityStatus: string;
	 profileSource: string;
	 currentCTC: number;
	 expectedCTC: number;
	 noticePeriod: number ; 
	 expectedDesignation: string;
	 isApprovedFlag: number;
	 currency: string;
	 updatedByName: string;
	 isApproved: string;
	 confirm: string;
	 project: string;
	 profileType:  string;S
}