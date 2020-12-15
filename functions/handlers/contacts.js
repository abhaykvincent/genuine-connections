exports.getAllContacts = (req, res) => {
    db.collection('getAllContacts')
      .orderBy('createdAt', 'desc')
      .get()
      .then((data) => {
        let screams = [];
        /* data.forEach((doc) => {
          screams.push({
            screamId: doc.id,
            body: doc.data().body,
            userHandle: doc.data().userHandle,
            createdAt: doc.data().createdAt,
            commentCount: doc.data().commentCount,
            likeCount: doc.data().likeCount,
            userImage: doc.data().userImage
          });
        }); */
        return res.json({screams:'screams'});
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: err.code });
      });
  };