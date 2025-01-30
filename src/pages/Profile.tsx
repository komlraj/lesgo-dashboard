import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  ProfileContainer,
  ProfileForm,
  FormGroup,
  Label,
  Input,
  Select,
  ErrorMessage,
  SubmitButton,
  ProfileCard,
  EditButton,
} from "../styles/ProfileStyles.ts";

type FormData = {
  name: string;
  phone: string;
  sex: "Male" | "Female" | "Other";
};

const Profile = () => {
  // Retrieve stored data (if exists) from local storage
  const storedProfile = localStorage.getItem("userProfile");
  const initialData: FormData | null = storedProfile
    ? JSON.parse(storedProfile)
    : null;

  const [isEditing, setIsEditing] = useState(!initialData);
  const [profileData, setProfileData] = useState<FormData | null>(initialData);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    if (profileData) {
      setValue("name", profileData.name);
      setValue("phone", profileData.phone);
      setValue("sex", profileData.sex);
    }
  }, [profileData, setValue]);

  const onSubmit = (data: FormData) => {
    localStorage.setItem("userProfile", JSON.stringify(data));
    setProfileData(data);
    setIsEditing(false);
    alert("Profile Updated");
  };

  const handleEditClick = () => setIsEditing(true);

  return (
    <ProfileContainer>
      <h2>{isEditing ? "Edit Profile" : "Profile Details"}</h2>

      {!isEditing && profileData ? (
        <ProfileCard>
          <p>
            <strong>Name:</strong> {profileData.name}
          </p>
          <p>
            <strong>Phone:</strong> {profileData.phone}
          </p>
          <p>
            <strong>Sex:</strong> {profileData.sex}
          </p>
          <EditButton onClick={handleEditClick}>Edit</EditButton>
        </ProfileCard>
      ) : (
        <ProfileForm onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label htmlFor="name">Name:</Label>
            <Input
              id="name"
              type="text"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="phone">Phone Number:</Label>
            <Input
              id="phone"
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Invalid phone number",
                },
              })}
            />
            {errors.phone && (
              <ErrorMessage>{errors.phone.message}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="sex">Sex:</Label>
            <Select {...register("sex", { required: "Sex is required" })}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </Select>
            {errors.sex && <ErrorMessage>{errors.sex.message}</ErrorMessage>}
          </FormGroup>

          <SubmitButton type="submit">Save</SubmitButton>
        </ProfileForm>
      )}
    </ProfileContainer>
  );
};

export default Profile;
