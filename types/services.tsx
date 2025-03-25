export type ServiceField = {
  name: string; 
  title: string; 
  type: string; 
  validation?: (rule: Rule) => Rule; 
  of?: ServiceField[]; 
  options?: { hotspot?: boolean }; 
  fields?: ServiceField[]; 
};

export type ServiceSchema = {
  name: string; 
  title: string; 
  type: string; 
  fields: ServiceField[]; 
  preview?: {
    select: {
      title: string; 
    };
  };
};