import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { roles, ProfileData } from './types';
import { ProfileForm } from './components/ProfileForm';
import {
  Container,
  Header,
  SearchInput,
  Grid,
  RoleCard,
  ProgressBar,
  Button
} from './styles';

function App() {
  const [search, setSearch] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [showProfile, setShowProfile] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>({});

  const filteredRoles = roles.filter(role =>
    role.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleProfileSubmit = (data: ProfileData) => {
    setProfileData(data);
    // Here you would typically submit the data to your backend
    console.log('Profile data:', { role: selectedRole, ...data });
  };

  const selectedRoleData = roles.find(role => role.id === selectedRole);

  return (
    <Container>
      <Header>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Step 2 of 3</h1>
          <p>{showProfile ? 'Complete your profile' : 'Great! What is your current role?'}</p>
        </motion.div>
      </Header>

      <ProgressBar />

      <AnimatePresence mode="wait">
        {!showProfile ? (
          <motion.div
            key="role-selection"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <SearchInput
              type="text"
              placeholder="Find a role"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <Grid>
              <AnimatePresence>
                {filteredRoles.map((role, index) => (
                  <motion.div
                    key={role.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ 
                      duration: 0.4,
                      delay: index * 0.1
                    }}
                  >
                    <RoleCard
                      onClick={() => setSelectedRole(role.id)}
                      $bgColor={role.color}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      animate={{
                        borderColor: selectedRole === role.id ? role.color : '#eee',
                        boxShadow: selectedRole === role.id 
                          ? `0 8px 20px ${role.color}30`
                          : 'none'
                      }}
                    >
                      <span className="icon">{role.icon}</span>
                      <span className="title">{role.title}</span>
                    </RoleCard>
                  </motion.div>
                ))}
              </AnimatePresence>
            </Grid>

            {selectedRole && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ textAlign: 'center', marginTop: '2rem' }}
              >
                <Button
                  $variant="primary"
                  onClick={() => setShowProfile(true)}
                >
                  Next
                </Button>
              </motion.div>
            )}
          </motion.div>
        ) : selectedRoleData ? (
          <ProfileForm
            role={selectedRoleData}
            onBack={() => setShowProfile(false)}
            onSubmit={handleProfileSubmit}
          />
        ) : null}
      </AnimatePresence>
    </Container>
  );
}

export default App;
