# Solo Project Brief

# MVP scope (core features you must get working)

1.  Database storing important info about each animal’s training and medical history
2.  Ability for users to input data to be stored in db
3.  Ability for users to read data stored in db

# Stretch goals

1.  Incorporate api to generate various visualizations of the data (wildly useful for medical history of exotic species as there is usually minimal communication about behavior and how it relates to the animal medically between trainers and vets)
2.  Store medical history
3.  Visually represent training plans
4.  Expand to dogs

# Database info

- animal
  - secure name
    ex. KOD, BAI, CRK, MUU, PLE, KNG, SNA, etc.
  - sex
  - age
  - wildcaught/bred
  - Maternal lineage (if bred)
  - peir
    <!-- - identifiers -->
    <!-- - social?
      - general heirarchal
      - current peir specifics
  - misc ? -->
- training history
  - behaviors
    - tasking
      - reinforcement history
      <!-- - diff strategies -->
      - current maintenance or plan
    - medical
      - reinforcement history
      <!-- - diff strategies -->
      - current maintenance or plan
    - tricks - reinforcement history - current maintenance or plan
      <!-- - diff strategies -->
      <!-- - trainers ?
    - style they primarily used w/ dolphin -->
    <!-- - motivators (overtime) or most effective etc
    - primary
    - secondary
    - tertiary -->
- medical history
  <!-- - cycle history (females) -->
  <!-- - illnesses -->
  <!-- - disabilities -->
  <!-- - puberty -->
  - eye
  - skin
  - breath
  - injuries
  - hydration
  - food intake

# SQL pros and cons

- pros
  - can view data across all animals (training of certain behaviors, certain medical illnesses) ->
    - PRO this will allow for trends on a larger sample size scale which would be most beneficial overall?
    - CON on day to day, individual trainer for indiv dolphin basis, may be more difficult
    - PRO indiv trainer has issue with certain behavior tho, may be more helpful to examine strategies used with other similar animals or different animals and draw new connections (less limited by only being able to ask people you know verbally)
      - PRO - v useful if expand to diff species
  - protect integrity of data
  - acid compliant - ideal audience is professionals in a workplace environment

# TODO MVP

1. boilerplate
   [x] set up elephant sql db
   [] set up front end framework
   [] set up back end framework
   [x] set up webpack
   [] successfully connect front and backend
2. functionality with db
   [] get request to server to db (retrieve a log)
   [] post request to server to db (save a log)

# TODO Stretch

[] use ai to generate db entries to show a trend (either with training for blood draws and how strategies change after a draw and leading up to a draw and what seems most successful)(OR medical overtime with age such as eyes and skin AND how they dont decline as rapidly with one type of eye drop vs another)
