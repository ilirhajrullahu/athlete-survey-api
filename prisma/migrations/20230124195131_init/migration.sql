-- CreateTable
CREATE TABLE "Athlete" (
    "athlete_id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "athlete_password" TEXT NOT NULL,

    CONSTRAINT "Athlete_pkey" PRIMARY KEY ("athlete_id")
);

-- CreateTable
CREATE TABLE "Survey" (
    "survey_id" SERIAL NOT NULL,

    CONSTRAINT "Survey_pkey" PRIMARY KEY ("survey_id")
);

-- CreateTable
CREATE TABLE "Question" (
    "question_id" SERIAL NOT NULL,
    "question_text" TEXT NOT NULL,
    "survey_fk" INTEGER NOT NULL,
    "athlete_fk" INTEGER NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("question_id")
);

-- CreateTable
CREATE TABLE "Answer" (
    "answer_id" SERIAL NOT NULL,
    "answer_number" INTEGER NOT NULL,
    "question_fk" INTEGER NOT NULL,
    "athlete_fk" INTEGER NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("answer_id")
);

-- CreateTable
CREATE TABLE "Athlete_Message" (
    "message_id" SERIAL NOT NULL,
    "message_text" TEXT NOT NULL,
    "message_date" TIMESTAMP(3) NOT NULL,
    "message_sender" INTEGER NOT NULL,
    "message_receiver" INTEGER NOT NULL,

    CONSTRAINT "Athlete_Message_pkey" PRIMARY KEY ("message_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Answer_question_fk_key" ON "Answer"("question_fk");

-- CreateIndex
CREATE UNIQUE INDEX "Answer_athlete_fk_key" ON "Answer"("athlete_fk");

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_athlete_fk_fkey" FOREIGN KEY ("athlete_fk") REFERENCES "Athlete"("athlete_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_question_fk_fkey" FOREIGN KEY ("question_fk") REFERENCES "Question"("question_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_athlete_fk_fkey" FOREIGN KEY ("athlete_fk") REFERENCES "Athlete"("athlete_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Athlete_Message" ADD CONSTRAINT "Athlete_Message_message_sender_fkey" FOREIGN KEY ("message_sender") REFERENCES "Athlete"("athlete_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Athlete_Message" ADD CONSTRAINT "Athlete_Message_message_receiver_fkey" FOREIGN KEY ("message_receiver") REFERENCES "Athlete"("athlete_id") ON DELETE RESTRICT ON UPDATE CASCADE;
